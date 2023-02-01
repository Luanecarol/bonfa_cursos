import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCategories1675253015136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO Category VALUES (?,?)', [
      1,
      'Tecnologia',
    ]);
    await queryRunner.query('INSERT INTO Category VALUES (?,?)', [
      2,
      'Educação',
    ]);
    await queryRunner.query('INSERT INTO Category VALUES (?,?)', [3, 'Saúde']);
    await queryRunner.query('INSERT INTO Category VALUES (?,?)', [
      4,
      'Finanças',
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('Category');
  }
}
