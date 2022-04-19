class InteractionSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :cat_id, :human_name, :time_stamp

  def human_name
    self.object.user.name
  end

end
