import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddActiveColumnToIntegration1674651651876
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Integration',
      new TableColumn({
        name: 'isActive',
        type: 'boolean',
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Integrations', 'isActive');
  }
}
