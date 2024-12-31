import { useEffect, useState } from "react";

export default function useMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch("http://localhost:5000/menu")
        .then((response) => response.json())
        .then((data) => {
          setMenu(data);
          setLoading(false);
        })
        
        .catch((error) => {
            console.error("Error fetching menu data:", error);
            setLoading(false);
        });
    }, []);
    return [menu,loading];
}
