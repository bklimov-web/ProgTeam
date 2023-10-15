import { Button } from "components/shared/ui/button";
import { FC } from "react";

type Props = {
  createNewProject: (formData: FormData) => Promise<any>;
};

const AddProjectForm: FC<Props> = ({ createNewProject }) => {
  return (
    <form
      action={createNewProject}
      className="flex flex-col items-center justify-center mt-[200px]"
    >
      <input
        className="text-center border-[1px] border-foreground"
        placeholder="project name"
        name="name"
        type="text"
        required
      />
      <Button className="mt-4" type="submit">
        Create new project!
      </Button>
    </form>
  );
};

export default AddProjectForm;
