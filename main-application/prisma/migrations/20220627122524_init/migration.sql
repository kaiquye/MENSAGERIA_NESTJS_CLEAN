-- CreateTable
CREATE TABLE `user_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'indefinite',
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_info_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address_attributes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `geographical_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `longitude` BIGINT NOT NULL,
    `latitude` BIGINT NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address_attributes` ADD CONSTRAINT `address_attributes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `geographical_data` ADD CONSTRAINT `geographical_data_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user_info`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
