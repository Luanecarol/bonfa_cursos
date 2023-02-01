import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedPlan1675254481984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'INSERT INTO Plan (id,title,value,createdAt, updatedAt) VALUES (?,?,?, now(), now())',
      [1, 'PLANO LITE', 49.0]
    );
    await queryRunner.query(
      'INSERT INTO Plan (id,title,value,createdAt, updatedAt) VALUES (?,?,?,now(), now())',
      [2, 'PLANO STARTER', 479.0]
    );
    await queryRunner.query(
      'INSERT INTO Plan (id,title,value,createdAt, updatedAt) VALUES (?,?,?, now(), now())',
      [3, 'PLANO PRO', 939.0]
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('Plan');
  }
}
