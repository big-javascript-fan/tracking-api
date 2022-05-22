-- CreateTable
CREATE TABLE "tracking" (
    "id" BIGSERIAL NOT NULL,
    "ipAddress" VARCHAR(255) NOT NULL,
    "tag" TEXT NOT NULL DEFAULT E'',
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tracking.ipAddress_unique" ON "tracking"("ipAddress");

-- CreateIndex
CREATE INDEX "index_ip_address" ON "tracking"("ipAddress");
