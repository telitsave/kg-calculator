import { useMutation } from "@tanstack/react-query";
import * as api from "../../api/api";

const useCalculateGoalCastle = () => {
  return useMutation({
    mutationKey: ["calculateGoalCastle"],
    mutationFn: api.calculateGoalCastle,
  });
};

export default useCalculateGoalCastle;
