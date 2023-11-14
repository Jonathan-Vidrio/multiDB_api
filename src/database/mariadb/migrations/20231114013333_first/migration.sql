-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `firstLastName` VARCHAR(191) NOT NULL,
    `secondLastName` VARCHAR(191) NOT NULL,
    `career` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacherId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `firstLastName` VARCHAR(191) NOT NULL,
    `secondLastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Teacher_teacherId_key`(`teacherId`),
    UNIQUE INDEX `Teacher_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
