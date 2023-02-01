import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddSubscriptionTable1675096335599 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Subscription',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'accountId',
            type: 'int',
            isUnique: false,
          },
          {
            name: 'planId',
            type: 'int',
            isUnique: false,
          },
          {
            name: 'startDate',
            type: 'timestamp',
          },
          {
            name: 'expiresIn',
            type: 'timestamp',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['accountId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Account',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['planId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Plan',
            onDelete: 'CASCADE',
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('Subscription');
    const foreignKey = table?.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('accountId') !== -1
    );
    await queryRunner.dropForeignKey('Subscription', foreignKey!);
    await queryRunner.dropTable('Subscription');
  }
}
