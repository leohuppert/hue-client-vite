import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLight } from "../api/lights";
import { Light } from "../api/typings";

interface Props {
  light: Light;
}

function LightCard({ light }: Props) {
  const queryClient = useQueryClient();

  console.log(light);

  const mutation = useMutation({
    mutationFn: toggleLight,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lights"] });
    },
  });

  return (
    <div
      className={`w-60 h-32 p-4 border rounded-lg flex flex-col justify-center cursor-pointer hover:shadow transition-all duration-75 ease-in-out ${
        light.on.on
          ? "bg-yellow-100 text-black"
          : "hover:text-yellow-500 hover:border-yellow-300"
      }`}
      onClick={() => mutation.mutate({ id: light.id, on: !light.on.on })}
    >
      {light.metadata.name}
    </div>
  );
}

export default LightCard;
