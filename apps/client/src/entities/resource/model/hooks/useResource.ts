import { ResourceType } from "../types";
import { useLocalStorage } from "@mantine/hooks";

const useResource = (resourceType: ResourceType) => {
  return useLocalStorage<number>({
    key: resourceType,
    defaultValue: 0,
    serialize: (value) => value.toString(),
    deserialize: (value) => parseInt(value || "0", 10),
  });
};

export default useResource;
