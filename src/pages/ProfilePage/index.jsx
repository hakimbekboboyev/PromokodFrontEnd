import React from "react";

const ProfilePage = () => {
  const user = {
    email: "user@example.com",
    savedPromos: [
      {
        id: 1,
        title: "10% off",
        description: "Get 10% off your purchase",
        code: "SAVE10",
        expiryDate: "2024-12-31",
      },
      {
        id: 2,
        title: "Free Shipping",
        description: "Free shipping on orders over $50",
        code: "FREESHIP",
        expiryDate: "2024-12-31",
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Profil</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <h3 className="mt-4">Saqlangan Promokodlar</h3>
      <ul className="list-group">
        {user.savedPromos.map((promo) => (
          <li key={promo.id} className="list-group-item">
            {promo.title} - {promo.code} (Muddati: {promo.expiryDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
