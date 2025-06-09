-- CreateTable
CREATE TABLE "Carta" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "remetente" TEXT,
    "urlQrCode" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "Carta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trecho" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "cartaId" TEXT NOT NULL,

    CONSTRAINT "Trecho_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carta_token_key" ON "Carta"("token");

-- AddForeignKey
ALTER TABLE "Trecho" ADD CONSTRAINT "Trecho_cartaId_fkey" FOREIGN KEY ("cartaId") REFERENCES "Carta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
