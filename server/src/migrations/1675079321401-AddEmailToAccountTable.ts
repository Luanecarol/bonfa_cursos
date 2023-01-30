import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddEmailToAccountTable1675079321401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Account',
      new TableColumn({
        name: 'email',
        type: 'varchar',
        length: '100',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Account', 'email');
  }
}
