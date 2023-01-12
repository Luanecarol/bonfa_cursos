import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddAccountColumn1673523627568 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Account',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'username',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '150',
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Account');
  }
}
