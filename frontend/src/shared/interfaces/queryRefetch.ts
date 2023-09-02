import { DefinedUseQueryResult } from "@tanstack/react-query";

interface queryRefetchI extends Pick<DefinedUseQueryResult, "refetch"> {}

export default queryRefetchI