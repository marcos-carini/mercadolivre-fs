-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foto" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_url_key" ON "Produto"("url");

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
