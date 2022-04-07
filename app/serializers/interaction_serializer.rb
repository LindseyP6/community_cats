class InteractionSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :cat_id
end
