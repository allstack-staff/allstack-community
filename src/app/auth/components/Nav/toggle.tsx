
import { useState } from "react";

export function toggleMenu() {
  const [show, setShow] = useState(false);

    if (show) {
      document.getElementById("login")?.classList.remove("hidden");

      document.getElementById("hamburguer-icon")?.classList.remove("hidden");

      document
        .getElementById("accessibilitys-icon")
        ?.classList.remove("hidden");

      setShow(!show);
    } else {
      document.getElementById("login")?.classList.add("hidden");

      document.getElementById("hamburguer-icon")?.classList.add("hidden");

      document.getElementById("accessibilitys-icon")?.classList.add("hidden");

      setShow(!show);
    }


}

