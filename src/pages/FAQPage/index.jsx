import React from "react";

const FAQPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tez-tez so'raladigan savollar</h2>
      <div className="accordion" id="faqAccordion">
        <div className="card">
          <div className="card-header" id="faq1">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                Bu sayt qanday ishlaydi?
              </button>
            </h5>
          </div>
          <div
            id="collapse1"
            className="collapse show"
            aria-labelledby="faq1"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
              Siz bu yerda turli kompaniyalarning promokodlari va chegirmalarini
              topishingiz mumkin.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="faq2">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Promokodlarni qanday ishlataman?
              </button>
            </h5>
          </div>
          <div
            id="collapse2"
            className="collapse"
            aria-labelledby="faq2"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
              Promokodlarni kompaniyaning saytida to'lov jarayonida
              ishlatishingiz mumkin.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
