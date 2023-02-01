import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddCourseTable1673539467848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Course',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'description',
            type: 'text',
            length: '100',
          },
          {
            name: 'category',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'accountId',
            type: 'int',
            isUnique: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'Course',
      new TableForeignKey({
        columnNames: ['accountId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Account',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('Course');
    const foreignKey = table?.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('accountId') !== -1
    );
    await queryRunner.dropForeignKey('Course', foreignKey!);
    await queryRunner.dropTable('Course');
  }
}
