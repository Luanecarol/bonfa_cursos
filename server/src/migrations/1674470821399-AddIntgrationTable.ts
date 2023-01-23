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
            name: 'accountId',
            type: 'int',
          },
          {
            name: 'publicKey',
            type: 'varchar',
            length: '250',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['platformId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Platform',
          },
          {
            columnNames: ['accountId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Account',
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
