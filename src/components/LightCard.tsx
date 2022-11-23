import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toggleLight } from "../api/lights";
import { Light } from "../api/typings";
import { xyBriToRgb } from "../utils/light-utils";

interface Props {
  light: Light;
}

function LightCard({ light }: Props) {
  const queryClient = useQueryClient();
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });

  console.log(light);

  useEffect(() => {
    if (light.color && light.color.xy) {
      setRgb(
        xyBriToRgb(
          light?.color.xy.x,
          light?.color.xy.y,
          light?.dimming.brightness
        )
      );
    }
  }, [light.color, light.dimming]);

  const mutation = useMutation({
    mutationFn: toggleLight,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lights"] });
    },
  });

  return (
    <div
      className={`w-60 h-32 p-4 border rounded-lg flex flex-col justify-center cursor-pointer hover:shadow ${
        light.on.on
          ? " text-black hover:text-black-700 "
          : "hover:text-yellow-500 hover:border-yellow-300"
      }`}
      onClick={() => mutation.mutate({ id: light.id, on: !light.on.on })}
      style={{
        transition: "background-color 0.5s ease;",
        background:
          light.on.on && light?.color
            ? `linear-gradient(rgb(${rgb.r}, ${rgb.g}, ${rgb.b}), #ffffff99 100%)`
            : "",
      }}
    >
      {light.metadata.name}
    </div>
  );
}

export default LightCard;
