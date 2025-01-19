import { OpinionDto } from "./dto/OpinionDto";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OpinionCard from "./OpinionCard";
import authAPI from "../../../helpers/authAPI";
import userAuthenticated from "../../../helpers/userAuthenticated";
import isUserAdmin from "../../../helpers/isUserAdmin";
export default function OpinionList() {
  const { id } = useParams();
  const [opinions, setOpinions] = useState<OpinionDto[]>();
  useEffect(() => {
    authAPI.get(`http://localhost:3003/opinions/product/${id}`).then((res) => {
      if (res && res.data.result) setOpinions(res.data.result);
    });
  }, [id,opinions]);
  const onChangeClick = (opinion: OpinionDto) => {
    if (userAuthenticated() &&  isUserAdmin()) {
      authAPI.patch(`https//localhost:3003/${opinion.opinionId}`);
      setOpinions(opinions?.filter((op) => op.opinionId != opinion.opinionId));
    }
  };
  const onDeleteClick = (opinion: OpinionDto) => {
    if (userAuthenticated() && isUserAdmin()) {
      authAPI.delete(`https//localhost:3003/${opinion.opinionId}`);
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
                    onChange:()=> onChangeClick(dto),
                    onDelete:()=>  onDeleteClick(dto),
                  }}
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
