document
  .getElementById("membershipForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      membershipType: document.getElementById("membershipType").value,
    };
    calculateMembership(formData);
  });

function calculateMembership({ name, email, membershipType }) {
  const prices = { standard: 500, premium: 1000 };
  let basePrice = prices[membershipType];
  let finalPrice = basePrice * 1.2;

  document.getElementById(
    "priceInfo"
  ).innerHTML = `${name}, cena Vašeg paketa je: ${finalPrice} RSD.`;
  document.getElementById("priceInfo").style.color =
    membershipType === "premium" ? "gold" : "silver";
}

function displayMembers() {
  const members = ["Uros", "Ognjen", "Luka"];
  let html = "<ul>";
  for (let i = 0; i < members.length; i++) {
    html += `<li>${members[i]}</li>`;
  }
  html += "</ul>";
  document.getElementById("memberList").innerHTML = html;
}

function subscribeToNewsletter() {
  let email = document.getElementById("newsletterEmail").value;
  if (email.includes("@")) {
    alert("Hvala što ste se pretplatili na naš newsletter!");
  } else {
    alert("Molimo unesite validnu e-mail adresu.");
  }
}

window.onload = function () {
  displayMembers();
};
