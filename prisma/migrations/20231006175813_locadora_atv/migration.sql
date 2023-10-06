-- CreateTable
CREATE TABLE `users` (
    `u_id` VARCHAR(191) NOT NULL,
    `u_name` VARCHAR(191) NOT NULL,
    `u_email` VARCHAR(191) NOT NULL,
    `u_password` VARCHAR(191) NOT NULL,
    `creat_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`u_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movies` (
    `m_id` VARCHAR(191) NOT NULL,
    `m_name` VARCHAR(191) NOT NULL,
    `m_director` VARCHAR(191) NOT NULL,
    `m_duration` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `genreId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`m_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genres` (
    `g_id` VARCHAR(191) NOT NULL,
    `g_name` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`g_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `genres`(`g_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
