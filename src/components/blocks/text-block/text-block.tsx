import { FC } from "react";

export type TextBlockContentProps = {
  description: string;
  subtitle: string;
  title: string;
};

type Props = {
  description: string;
  subtitle: string;
  title: string;
};

const TextBlock: FC<Props> = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col justify-center mx-auto w-screen h-full text-center py-10 bg-blue-100">
      <p>{subtitle}</p>
      <h1 className="text-3xl mt-10">{title}</h1>
      <p className="mt-10">{description}</p>
    </div>
  );
};

export default TextBlock;
