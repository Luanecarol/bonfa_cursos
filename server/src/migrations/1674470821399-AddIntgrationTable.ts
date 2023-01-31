import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddIntgrationTable1674470821399 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Integration',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'platformId',
            type: 'int',
          },
          {
            name: 'courseId',
            type: 'int',
          },
          {
            name: 'urlCheckout',
            type: 'varchar',
            length: '250',
            default: null,
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['platformId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Platform',
          },
          {
            columnNames: ['courseId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Course',
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Integration');
  }
}
