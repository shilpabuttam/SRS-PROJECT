import { useState, useEffect } from "react";

const users = ["Alice", "Bob", "Charlie", "David"];

export default function Notification() {
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState({});

  useEffect(() => {
    if (users.includes(searchTerm)) {
      setNotifications((prev) => ({
        ...prev,
        [searchTerm]: `You have been searched!`,

      }));
    }
  }, [searchTerm]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for a name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <div>
        {Object.entries(notifications).map(([name, message]) => (
          <div key={name} className="p-2 mb-2 bg-green-100 border">
            <strong>{name}</strong>: {message}
          </div>
        ))}
      </div>
    </div>
  );
}
