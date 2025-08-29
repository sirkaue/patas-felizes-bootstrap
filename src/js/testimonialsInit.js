const DAYS_IN_MONTH = 30;
const DAYS_IN_YEAR = 365;
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

const GENDER = {
  FEMALE: "F",
  MALE: "M",
};

const MONTH_FORMATTER = new Intl.DateTimeFormat("pt-BR", { month: "long" });

const petsData = {
  luna: {
    adoptionDate: "2021-10-15",
    name: "Luna",
    gender: GENDER.FEMALE,
  },
  bolinha: {
    adoptionDate: "2023-03-20",
    name: "Bolinha",
    gender: GENDER.MALE,
  },
  batatinha: {
    adoptionDate: "2025-02-10",
    name: "Batatinha",
    gender: GENDER.MALE,
  },
};

function calculateDaysDifference(adoptionDate) {
  const adoption = new Date(adoptionDate);
  const now = new Date();
  const diffTime = Math.abs(now - adoption);
  return Math.ceil(diffTime / MILLISECONDS_IN_DAY);
}

function formatDays(days) {
  return `${days} ${days === 1 ? "dia" : "dias"} na família`;
}

function formatMonths(months) {
  return `${months} ${months === 1 ? "mês" : "meses"} na família`;
}

function formatYears(years) {
  return years === 1 ? "1 ano na família" : `${years} anos na família`;
}

function formatAdoptionDate(adoptionDate, gender) {
  const date = new Date(adoptionDate);

  const month = MONTH_FORMATTER.format(date);
  const year = date.getFullYear();

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  const adoptedText = gender === GENDER.FEMALE ? "Adotada" : "Adotado";

  return `${adoptedText} em ${capitalizedMonth}, ${year}`;
}

function calculateFamilyTime(adoptionDate) {
  const diffDays = calculateDaysDifference(adoptionDate);

  if (diffDays < DAYS_IN_MONTH) {
    return formatDays(diffDays);
  }

  if (diffDays < DAYS_IN_YEAR) {
    const months = Math.floor(diffDays / DAYS_IN_MONTH);
    return formatMonths(months);
  }

  const years = Math.floor(diffDays / DAYS_IN_YEAR);
  return formatYears(years);
}

function findTimeElement(card) {
  return card.querySelector(".d-flex.align-items-center.gap-2 span.text-muted");
}

function findAdoptionDateElement(card) {
  return card.querySelector("figcaption p.text-light-blue");
}

function findPetName(card) {
  const petNameElement = card.querySelector("figcaption h3");
  return petNameElement?.textContent.trim().toLowerCase();
}

function findPetData(petName) {
  return petsData[petName];
}

function processTestimonialCard(card) {
  const timeElement = findTimeElement(card);
  const adoptionDateElement = findAdoptionDateElement(card);

  if (!timeElement && !adoptionDateElement) return;

  const petName = findPetName(card);
  if (!petName) return;

  const petData = findPetData(petName);
  if (!petData) return;

  processTimeElement(timeElement, petData);
  processAdoptionDateElement(adoptionDateElement, petData);
}

function processTimeElement(timeElement, petData) {
  if (!timeElement) return;

  const timeText = calculateFamilyTime(petData.adoptionDate);
  timeElement.textContent = timeText;

  if (!timeElement.hasAttribute("role")) {
    timeElement.setAttribute("role", "status");
  }

  timeElement.setAttribute(
    "aria-label",
    `${petData.name} está na família há ${timeText.replace(" na família", "")}`
  );
}

function processAdoptionDateElement(adoptionDateElement, petData) {
  if (!adoptionDateElement) return;

  const adoptionText = formatAdoptionDate(petData.adoptionDate, petData.gender);

  const timeTag = adoptionDateElement.querySelector("time");
  if (timeTag) {
    timeTag.setAttribute("datetime", petData.adoptionDate);
    timeTag.textContent = adoptionText;
  } else {
    adoptionDateElement.textContent = adoptionText;
  }

  adoptionDateElement.setAttribute(
    "aria-label",
    `${petData.name} foi ${adoptionText.toLowerCase()}`
  );
}

function updatePetInformation() {
  const testimonialsCards = document.querySelectorAll("#testimonials .card");
  testimonialsCards.forEach(processTestimonialCard);
}

export function testimonialsInit() {
  updatePetInformation();
}
