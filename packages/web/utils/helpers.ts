import { superjson } from "@osmosis-labs/server";
import { createServerSideHelpers } from "@trpc/react-query/server";

import { AssetLists } from "~/config/generated/asset-lists";
import { ChainList } from "~/config/generated/chain-list";
import { appRouter } from "~/server/api/root-router";

/**
 * tRPC helpers for SSR queries, useful for data prefetching
 */
export const trpcHelpers = createServerSideHelpers({
  router: appRouter,
  ctx: {
    assetLists: AssetLists,
    chainList: ChainList,
  },
  transformer: superjson,
});
