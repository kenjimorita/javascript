class CreateUserSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :user_settings do |t|
      t.integer :user_id, null: false
      t.boolean :show_my_child_objectives, default: true
      t.boolean :show_my_key_results, default: true
      t.boolean :show_members_key_results, default: true
      t.timestamps
    end
  end
end
