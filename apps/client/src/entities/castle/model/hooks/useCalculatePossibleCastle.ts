import { useMutation } from "@tanstack/react-query";
import * as api from "../../api/api";

const useCalculatePossibleCastle = () => {
  return useMutation({
    mutationKey: ["calculatePossibleCastle"],
    mutationFn: api.calculatePossibleCastle,
  });
};

export default useCalculatePossibleCastle;
