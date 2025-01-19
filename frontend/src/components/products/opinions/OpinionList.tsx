import OpinionDto from "./dto/OpinionDto";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OpinionCard from "./OpinionCard";
import axios from "axios";
import authAPI from "../../../helpers/authAPI";

export default function OpinionList() {
    const { id } = useParams();
    const [opinions, setOpinions] = useState<OpinionDto[]>();
    useEffect(() => {
      
      authAPI.get(`http://localhost:3003/opinions/product/${id}`).then((res) => {
        if (res && res.data.result) setOpinions(res.data.result);
      });
    }, [id]);
    return (
      <div className="flex flex-col gap-6">
        {opinions ? (
          opinions.map((dto, index) => {
            return (
              <div key={index}>
                  <OpinionCard opinion={dto} />
              </div>
              
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}