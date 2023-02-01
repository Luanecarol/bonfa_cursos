import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddPlanTable1674408736681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Plan',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'value',
            type: 'float',
            precision: 2,
          },
          {
            default: 'now()',
            name: 'createdAt',
            type: 'timestamp',
          },
          {
            default: 'now()',
            name: 'updatedAt',
            type: 'timestamp',
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Plan');
  }
}
