export const district = [
  {
    id: 1,
    value: "Thiruvananthapuram",
    parent: "kerala",
  },
  {
    id: 2,
    value: "Kollam",
    parent: "kerala",
  },
  {
    id: 3,
    value: "Pathanthitta",
    parent: "kerala",
  },
  {
    id: 4,
    value: "Alappuzha",
    parent: "kerala",
  },
  {
    id: 5,
    value: "Kottayam",
    parent: "kerala",
  },
  {
    id: 6,
    value: "Idukki",
    parent: "kerala",
  },
  {
    id: 7,
    value: "Eranakulam",
    parent: "kerala",
  },
  {
    id: 8,
    value: "Thrissur",
    parent: "kerala",
  },
  {
    id: 9,
    value: "Palakkad",
    parent: "kerala",
  },
  {
    id: 10,
    value: "Malappuram",
    parent: "kerala",
  },
  {
    id: 11,
    value: "Kozhikkod",
    parent: "kerala",
  },
  {
    id: 12,
    value: "Wayanad",
    parent: "kerala",
  },
  {
    id: 13,
    value: "Kannur",
    parent: "kerala",
  },
  {
    id: 14,
    value: "Kasaragod",
    parent: "kerala",
  },
];

export const localBodyType = [
  {
    id: 1,
    value: "Municipal Corporation",
  },
  {
    id: 2,
    value: "Municipality",
  },
  {
    id: 3,
    value: "Grama Panchayat",
  },
];

export const localBodyName = [
  {
    id: 1,
    value: "Kochi Corporation",
    localBodyType: 1,
    districtId: 7,
  },
  {
    id: 2,
    value: "Thiruvananthapuram Corporation",
    localBodyType: 1,
    districtId: 1,
  },
  {
    id: 3,
    value: "Thodupuzha Municipality",
    localBodyType: 2,
    districtId: 6,
  },
];

export const zonalOffice = [
  {
    id: 1,
    value: "Kochi Main office",
    localBodyId: 1,
  },
  {
    id: 2,
    value: "Mattanchery",
    localBodyId: 1,
  },
  {
    id: 3,
    value: "Fort Kochi",
    localBodyId: 1,
  },
];

export const wardId = [
  {
    id: 1,
    value: "Ward 1",
    zonalOfficeId: 1,
  },
  {
    id: 2,
    value: "Ward 2",
    zonalOfficeId: 1,
  },
  {
    id: 3,
    value: "Ward 3",
    zonalOfficeId: 1,
  },
  {
    id: 4,
    value: "Ward 4",
    zonalOfficeId: 2,
  },
  {
    id: 5,
    value: "Ward 5",
    zonalOfficeId: 2,
  },
  {
    id: 6,
    value: "Ward 6",
    zonalOfficeId: 2,
  },
  {
    id: 7,
    value: "Ward 7",
    zonalOfficeId: 3,
  },
  {
    id: 8,
    value: "Ward 8",
    zonalOfficeId: 3,
  },
  {
    id: 9,
    value: "Ward 9",
    zonalOfficeId: 3,
  },
];

export const occupancyNature = [
  {
    id: 1,
    value: "Residential",
  },
  {
    id: 2,
    value: "Office",
  },
  {
    id: 3,
    value: "Commercial",
  },
  {
    id: 4,
    value: "Schools",
  },
];

export const villageMaster = [
  {
    id: 1,
    value: "Village 1",
    localBodyId: 1,
  },
  {
    id: 2,
    value: "Village 2",
    localBodyId: 1,
  },
  {
    id: 3,
    value: "Village 3",
    localBodyId: 1,
  },
];
