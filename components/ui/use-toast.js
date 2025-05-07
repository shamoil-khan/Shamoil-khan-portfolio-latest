"use client"

import { createContext, useContext, useState } from "react"

const TOAST_REMOVE_DELAY = 1000000

const ToastActionContext = createContext({})

function useToast() {
  const context = useContext(ToastActionContext)

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}

const ToastContext = createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  updateToast: () => {},
})

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  function addToast(toast) {
    const id = Math.random().toString(36).substring(2, 9)

    setToasts((prevToasts) => [...prevToasts, { id, ...toast }])

    return id
  }

  function removeToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  function updateToast(id, toast) {
    setToasts((prevToasts) => prevToasts.map((t) => (t.id === id ? { ...t, ...toast } : t)))
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        updateToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

function toast(props) {
  const { addToast } = useContext(ToastContext)

  return addToast(props)
}

export { useToast, ToastProvider, toast, ToastContext }
