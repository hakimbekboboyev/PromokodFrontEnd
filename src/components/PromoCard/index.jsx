import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Rodal from "rodal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

const PromoCard = ({ type }) => {
  const [categoryName, setCategoryName] = useState("");
  const [selected, setSelected] = useState({});
  const [rodal, setRodal] = useState(false);
  const [promo, setPromo] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        type == "all"
          ? `https://promokodapi-production.up.railway.app/api/v1/promo/getAllPromo`
          : `https://promokodapi-production.up.railway.app/api/v1/promo/category/${
              location.pathname.split("/")[2]
            }`
      )
      .then(({ data }) => {
        if (type == "all") {
          setPromo(data || []);
          setCategoryName("Eng so'nggi promokodlar");
        } else {
          setPromo(data.responseEntity.promoCodList || []);
          setCategoryName(data.responseEntity.name);
        }
      });
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-4">{categoryName}</h2>
      <div className="col-12  mb-4 p-0 d-flex" style={{ flexWrap: "wrap" }}>
        {promo.map((item, i) => (
          <div className="card promo m-2">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/moviegouz.appspot.com/o/movies%2Fmarvel%2Fcaptain-america-2-the-winter-soldier%2Fpreview.webp?alt=media&token=4f2f8e37-d9a9-4d8f-b001-e719c71e2312"
              }
              alt="image"
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textTransform: "capitalize" }}
              >
                {item.companyName}
              </h5>
              <p className="card-text">{item.title}</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setRodal(true);
                  setSelected(item);
                }}
              >
                Batafsil
              </button>
            </div>
          </div>
        ))}
      </div>
      <Rodal visible={rodal} onClose={() => setRodal(false)}>
        <div className="company">
          <div className="title">
            <h4>
              Ushbu promokod orqali {selected.startPrice} so'mdan boshlanadigan
              mahsulotlar uchun {selected.discountPrice} so'm chegirma!
            </h4>
          </div>
          <div className="valid">
            <CiCalendarDate />
            <p>Amal qilish muddati {selected.expireDate}</p>
          </div>
        </div>

        <div className="wrapper">
          <p className="">
            «<Link to={selected.link}>{selected.companyName}</Link>» ilovasiga
            kirib shu promokoddan foydalaning
          </p>

          <div className="promocode">
            <input type="text" value={selected.promoName} />
            <CopyToClipboard
              text={selected.promoName}
              onCopy={() => setRodal(false)}
            >
              <button>
                <FaCopy />
              </button>
            </CopyToClipboard>
          </div>

          <p>
            Mahsulotlarni sotib olishda maxsus promokoddan foydalaning va 40 000
            so'mlik chegirmaga ega bo'ling! Taklif faqat birinchi buyurtmaga 60
            000 so‘mdan yuqori bo'lgan xaridlar uchun amal qiladi.
          </p>
        </div>
      </Rodal>
    </div>
  );
};

export default PromoCard;
