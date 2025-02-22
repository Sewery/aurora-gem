import { OpinionDto } from "./dto/OpinionDto";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OpinionCard from "./OpinionCard";
import authAPI from "../../../helpers/authAPI";
import userAuthenticated from "../../../helpers/userAuthenticated";
import isUserAdmin from "../../../helpers/isUserAdmin";
import getCustomerInfo from "../../../helpers/getCustomerInfo";
import CustomerInterface from "../../../interfaces/CustomerInterface";
export default function OpinionList() {
  const { id } = useParams();
  const [opinions, setOpinions] = useState<OpinionDto[]>();
  const [userOpinions, setUserOpinions] = useState<OpinionDto[]>([]);
  const user:CustomerInterface|null= getCustomerInfo();
  useEffect(() => {
    authAPI.get(`http://localhost:3003/opinions/product/${id}`).then((res) => {
      if (res && res.data.result) setOpinions(res.data.result);
    });
  }, [id, opinions]);
  useEffect(() => {
    if (userAuthenticated())
      authAPI.get(`http://localhost:3003/opinions/customer/`).then((res) => {
        if (res && res.data.result) setUserOpinions(res.data.result);
      });
  }, []);
  const onChangeClick = (opinion: OpinionDto) => {
    if (userAuthenticated() &&  (isUserAdmin() || user?.id == opinion.customerId)) {
      authAPI.patch(`http://localhost:3003/opinions/${opinion.opinionId}`);
      setOpinions(opinions?.filter((op) => op.opinionId != opinion.opinionId));
    }
  };
  const onDeleteClick = (opinion: OpinionDto) => {
    if (userAuthenticated() &&  (isUserAdmin() || user?.id == opinion.customerId)) {
      authAPI.delete(`http://localhost:3003/opinions/${opinion.opinionId}`);
      setOpinions(opinions?.filter((op) => op.opinionId != opinion.opinionId));
    }
  };
  return (
    <div className="flex flex-col gap-6">
      {opinions ? (
        opinions
          .filter((dto) => dto.opinionId != null)
          .map((dto, index) => {
            return (
              <div key={index}>
                <OpinionCard
                  opinion={dto}
                  callbacks={{
                    onChange: () => onChangeClick(dto),
                    onDelete: () => onDeleteClick(dto),
                  }}
                  userOpinion={userOpinions.some(v=>v.opinionId==dto.opinionId)}
                />
              </div>
            );
          })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
