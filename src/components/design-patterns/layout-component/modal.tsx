"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center"
          onClick={onClose}
        >
          <div
            className="w-1/2 h-1/2 bg-white rounded-2xl p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Button onClick={onClose} className="ml-auto">
              Close
            </Button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export function ContainerModel() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Model</Button>
      <Modal onClose={() => setShowModal(false)} open={showModal}>
        <p>hello</p>
      </Modal>
    </>
  );
}
