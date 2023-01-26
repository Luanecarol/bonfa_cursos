import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCheckoutUrlToCourseTable1674752018270
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Course',
      new TableColumn({
        name: 'urlCheckout',
        type: 'varchar',
        length: '250',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Course', 'urlCheckout');
  }
}
