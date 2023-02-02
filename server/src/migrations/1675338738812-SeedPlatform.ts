import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedPlatform1675338738812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO Platform (platformName) VALUES (?)', [
      'Eduzz',
    ]);
    await queryRunner.query('INSERT INTO Platform (platformName) VALUES (?)', [
      'Kiwify',
    ]);
    await queryRunner.query('INSERT INTO Platform (platformName) VALUES (?)', [
      'Hotmart',
    ]);
    await queryRunner.query('INSERT INTO Platform (platformName) VALUES (?)', [
      'Monetizze',
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('Platform');
  }
}
