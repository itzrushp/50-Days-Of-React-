import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 30,
    location: "New York",
  });

  // Generic handler for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value, // dynamically update the correct field
    }));
  };

  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name: {profile.name}</h3>
      <h3>Age: {profile.age}</h3>
      <h3>Location: {profile.location}</h3>

      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Enter the name:"
      />
      <input
        type="text"
        name="age"
        value={profile.age}
        onChange={handleChange}
        placeholder="Enter the age:"
      />
      <input
        type="text"
        name="location"
        value={profile.location}
        onChange={handleChange}
        placeholder="Enter the location:"
      />

      <button onClick={() => alert(JSON.stringify(profile))}>
        Save Profile
      </button>
    </div>
  );
};

export default Profile;
