import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddRoleColumnToAccount1673541859478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Account',
      new TableColumn({
        name: 'role',
        type: 'varchar',
        length: '15',
        isNullable: true,
        default: "'app_owner'",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Account', 'role');
  }
}
