import { UseQueryResult } from "@tanstack/react-query";

interface queryIsLoading extends Pick<UseQueryResult, "isLoading"> {}

export default queryIsLoading