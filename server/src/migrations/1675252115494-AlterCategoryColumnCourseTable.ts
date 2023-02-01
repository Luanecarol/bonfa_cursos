import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterCategoryColumnCourseTable1675252115494
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'Course',
      'category',
      new TableColumn({
        name: 'categoryId',
        type: 'int',
        isUnique: false,
      })
    );

    await queryRunner.createForeignKey(
      'Course',
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Category',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('Course');
    const foreignKey = table?.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('categoryId') !== -1
    );
    await queryRunner.dropForeignKey('Course', foreignKey!);
    await queryRunner.changeColumn(
      'Course',
      'categoryId',
      new TableColumn({
        name: 'category',
        type: 'varchar',
        length: '100',
      })
    );
  }
}
