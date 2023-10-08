import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";

import { ReactNode } from "react";

type GenericModelProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: ReactNode;
};

const GenericModel: React.FC<GenericModelProps> = ({
  children,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent
        className="pt-[20px] pb-[20px] text-center shadow-xl"
        maxW="612.09px"
        width={{ base: "100%" }}
      >
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GenericModel;
