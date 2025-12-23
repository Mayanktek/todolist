const BASE_URL = "http://localhost:3001";

// CREATE (POST)
export const createData = async (endpoint, data) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Request failed");
  }

  return res.json();
};

// UPDATE (POST)
export const updateData = async (endpoint, data) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Update failed");
  }

  return res.json();
};

// DELETE (PUT)
export const deleteData = async (endpoint) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "PUT",
  });

  if (!res.ok) {
    throw new Error("Delete failed");
  }

  return res.json();
};
