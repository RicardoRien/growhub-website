import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className="p__error">Este campo es requerido.</p>
      case "minLength":
        return <p className="p__error">Requiere al menos dos caracteres.</p>
      case "pattern":
        return <p className="p__error">Ingresa un email valido.</p>
      case "validate":
        return <p className="p__error">Este nombre de usuario ya está en uso.</p>
      default:
        return null;
    }
  }

  return null;
}
