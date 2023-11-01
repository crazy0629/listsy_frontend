export type SVGAttributes = React.SVGProps<SVGSVGElement>;

export type ISeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

export type IConfirmModalProps = {
  open: boolean;
  onOk: () => void;
  okText?: string;
  cancelText?: string;
  onCancel: () => void;
  type: "success" | "warning" | "error";
  title?: string;
  description?: string;
  content?: React.ReactNode;
};
