"""add parent_key to DataQualifier

Revision ID: e576b6a80a49
Revises: 327cd266f7b3
Create Date: 2021-10-01 03:16:51.491505

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "e576b6a80a49"
down_revision = "327cd266f7b3"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("data_qualifiers", sa.Column("parent_key", sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("data_qualifiers", "parent_key")
    # ### end Alembic commands ###
