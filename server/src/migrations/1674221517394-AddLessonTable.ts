import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddLessonTable1674221517394 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Lesson',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'lessonTitle',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'videoUrl',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'moduleId',
            type: 'int',
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'Lesson',
      new TableForeignKey({
        columnNames: ['moduleId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Module',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('Lesson');
    const foreignKey = table?.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('moduleId') !== -1
    );
    await queryRunner.dropForeignKey('Lesson', foreignKey!);
    await queryRunner.dropTable('Lesson');
  }
}
