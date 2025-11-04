-- CreateTable
CREATE TABLE "Charger" (
    "id" TEXT NOT NULL,
    "vendor" TEXT,
    "model" TEXT,
    "firmwareVersion" TEXT,
    "serialNumber" TEXT,
    "boxSerialNumber" TEXT,
    "lastBootAt" TIMESTAMP(3),
    "lastHeartbeatAt" TIMESTAMP(3),
    "connected" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Charger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connector" (
    "id" SERIAL NOT NULL,
    "chargerId" TEXT NOT NULL,
    "connectorId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "errorCode" TEXT,
    "lastStatusAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Connector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "chargerId" TEXT NOT NULL,
    "connectorId" INTEGER NOT NULL,
    "idTag" TEXT NOT NULL,
    "meterStart" INTEGER NOT NULL,
    "meterStop" INTEGER,
    "startTimestamp" TIMESTAMP(3) NOT NULL,
    "stopTimestamp" TIMESTAMP(3),
    "reason" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Connector_chargerId_connectorId_key" ON "Connector"("chargerId", "connectorId");

-- CreateIndex
CREATE INDEX "Transaction_chargerId_idx" ON "Transaction"("chargerId");

-- AddForeignKey
ALTER TABLE "Connector" ADD CONSTRAINT "Connector_chargerId_fkey" FOREIGN KEY ("chargerId") REFERENCES "Charger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_chargerId_fkey" FOREIGN KEY ("chargerId") REFERENCES "Charger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
